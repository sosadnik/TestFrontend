package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.controller.PersonDto;
import org.example.backend.model.Person;
import org.example.backend.repository.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PersonService {

    private final PersonRepository personRepository;

    public List<PersonDto> getPerson() {
        List<Person> personList = personRepository.findAll();
        List<PersonDto> personDtoList = new ArrayList<>();
        for (Person x : personList) {
            personDtoList.add(new PersonDto(x.getName(), x.getAge()));
        }
        return personDtoList;
    }

    public void addToDatabase(PersonDto personDto) {
        Person person = new Person(personDto.getName(), personDto.getAge());
        personRepository.save(person);
    }

}
