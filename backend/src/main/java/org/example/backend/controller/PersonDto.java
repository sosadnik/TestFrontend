package org.example.backend.controller;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PersonDto {

    public PersonDto(String name, int age) {
        this.name = name;
        this.age = age;
    }

    private String name;
    private int age;


}
