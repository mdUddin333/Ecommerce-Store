package com.revature.indexnotfound.Project2.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(
        name = "user",
        uniqueConstraints = @UniqueConstraint(
                name = "emailid_unique",
                columnNames = "email_address"
        ))
public class User {

    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )

    private Long userId;

    private String firstName;
    private String lastName;

    @Column(
            name = "username",
            nullable = false
    )
    private String username;

    @Column(
            name = "password",
            nullable = false
    )
    private String password;

    private String address;
    private String type;

    @Column(
            name = "email_address",
            nullable = false
    )
    private String emailId;

}
