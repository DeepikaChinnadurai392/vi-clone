package com.vi.backend.controller;

import com.vi.backend.model.Internship;
import com.vi.backend.repository.InternshipRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/internships")
public class InternshipController {

    private final InternshipRepository internshipRepository;

    public InternshipController(InternshipRepository internshipRepository) {
        this.internshipRepository = internshipRepository;
    }

    // GET all internships
    @GetMapping
    public List<Internship> getAllInternships() {
        return internshipRepository.findAll();
    }

    // GET internship by ID
    @GetMapping("/{id}")
    public Optional<Internship> getInternshipById(@PathVariable Long id) {
        return internshipRepository.findById(id);
    }

    // POST - create new internship
    @PostMapping
    public Internship createInternship(@RequestBody Internship internship) {
        return internshipRepository.save(internship);
    }

    // PUT - update existing internship
    @PutMapping("/{id}")
    public Internship updateInternship(@PathVariable Long id, @RequestBody Internship internshipDetails) {
        Internship internship = internshipRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Internship not found with id " + id));
        internship.setTitle(internshipDetails.getTitle());
        internship.setDescription(internshipDetails.getDescription());
        internship.setCompany(internshipDetails.getCompany());
        return internshipRepository.save(internship);
    }

    // DELETE - delete internship by ID
    @DeleteMapping("/{id}")
    public String deleteInternship(@PathVariable Long id) {
        internshipRepository.deleteById(id);
        return "Internship with id " + id + " deleted successfully!";
    }
}
