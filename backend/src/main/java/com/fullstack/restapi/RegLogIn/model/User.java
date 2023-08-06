package com.fullstack.restapi.RegLogIn.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name="User1")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String emailId;
    private String userName;
    private String password;
}
