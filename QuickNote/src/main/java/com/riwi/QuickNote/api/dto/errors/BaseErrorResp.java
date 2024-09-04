package com.riwi.QuickNote.api.dto.errors;

import java.io.Serializable;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class BaseErrorResp implements Serializable{
 
    private String status;
    private Integer code;
    private Map<String, String> error;
};