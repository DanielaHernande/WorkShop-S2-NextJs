package com.riwi.QuickNote.infrastructure.abstract_services;

public interface IUpdateNote <RQ, RS, ID>{
    
    public RS update(RQ request, ID id);
}
