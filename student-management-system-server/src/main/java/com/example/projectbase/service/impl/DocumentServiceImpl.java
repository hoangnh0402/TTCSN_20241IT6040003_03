package com.example.projectbase.service.impl;

import com.example.projectbase.domain.entity.Document;
import com.example.projectbase.domain.entity.Subject;
import com.example.projectbase.repository.DocumentRepository;
import com.example.projectbase.repository.SubjectRepository;
import com.example.projectbase.service.DocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import static com.example.projectbase.constant.ErrorMessage.Document.ERR_READ_FILE;
import static com.example.projectbase.constant.ErrorMessage.Document.ERR_SAVE_FILE;
import static com.example.projectbase.constant.ErrorMessage.User.ERR_NOT_FOUND_ID;

@Service
@RequiredArgsConstructor
public class DocumentServiceImpl implements DocumentService {
    private final DocumentRepository documentRepository;
    private final SubjectRepository subjectRepository;

    private final Path storagePath = Paths.get("documents");

    @Override
    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    @Override
    public Document uploadDocument(MultipartFile file, String name, String type, String description, String subjectId) {
        try {
            // Tạo thư mục lưu trữ nếu chưa tồn tại
            if (!Files.exists(storagePath)) {
                Files.createDirectories(storagePath);
            }

            // Lưu file vào thư mục
            Path filePath = storagePath.resolve(file.getOriginalFilename());
            Files.write(filePath, file.getBytes());

            // Lấy thông tin môn học theo ID
            Subject subject = subjectRepository.findSubjectById(subjectId);
            if (subject == null) {
                throw new RuntimeException(String.format(ERR_NOT_FOUND_ID, subjectId));
            }

            // Tạo đối tượng Document
            Document document = Document.builder()
                    .name(name)
                    .path(filePath.toString())
                    .type(type)
                    .description(description)
                    .subject(subject)
                    .build();

            // Lưu vào cơ sở dữ liệu
            return documentRepository.save(document);
        } catch (IOException e) {
            throw new RuntimeException(ERR_SAVE_FILE, e);
        }
    }

    @Override
    public byte[] downloadDocument(String id) {
        // Lấy tài liệu theo ID
        Document document = documentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format(ERR_NOT_FOUND_ID, id)));

        try {
            // Đọc nội dung file từ hệ thống
            Path filePath = Paths.get(document.getPath());
            return Files.readAllBytes(filePath);
        } catch (IOException e) {
            throw new RuntimeException(ERR_READ_FILE, e);
        }
    }

    @Override
    public Document getDocumentById(String id) {
        return documentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format(ERR_NOT_FOUND_ID, id)));
    }

    @Override
    public List<Document> getAllDocumentsBySubject(String id) {
        Subject subject = subjectRepository.findSubjectById(id);
        if (subject == null) {
            throw new RuntimeException(String.format(ERR_NOT_FOUND_ID, id));
        }
        return documentRepository.findAllBySubject_Id(id);
    }
}
