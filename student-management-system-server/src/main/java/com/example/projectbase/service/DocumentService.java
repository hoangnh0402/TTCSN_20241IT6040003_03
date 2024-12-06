package com.example.projectbase.service;

import com.example.projectbase.domain.entity.Document;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface DocumentService {
    public List<Document> getAllDocuments();
    public Document uploadDocument(MultipartFile file, String name, String type, String description, String subjectId);
    public byte[] downloadDocument(String id);
    public Document getDocumentById(String id);
    public List<Document> getAllDocumentsBySubject(String id);

}
