package com.riwi.QuickNote.api.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.riwi.QuickNote.api.dto.response.NoteResp;
import com.riwi.QuickNote.infrastructure.abstract_services.INoteService;
import com.riwi.QuickNote.utils.enums.SortType;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/notes")
public class NoteController {

    @Autowired
    private final INoteService noteService;

    // Find All
    @GetMapping
    @Operation(summary = "List all Notes",
                description = "Returns a paginated list of all notes.")

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful operation. Returns the paginated list of notes."),
            @ApiResponse(responseCode = "400", description = "Bad request. This may occured if the parameters are incorrect.")
    })
    public ResponseEntity<Page<NoteResp>> getAll(
        @RequestParam(defaultValue = "1") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestHeader(required = false) SortType sortType) {
        
        if (Objects.isNull(sortType)) sortType = SortType.NONE;

        return ResponseEntity.ok(this.noteService.getAll(page - 1, size, sortType));
    };
};