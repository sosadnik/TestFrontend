package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.service.PersonService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequiredArgsConstructor
@RestController
@RequestMapping("/base")
public class DatabaseRestController {

    private final PersonService personService;


    @PostMapping("/person")
    public void savePerson(@RequestBody PersonDto personDto){
        personService.addToDatabase(personDto);
    }

    @GetMapping("/person")
    public List<PersonDto> getPerson(){
        return personService.getPerson();
    }


}
