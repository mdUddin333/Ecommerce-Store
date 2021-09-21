package com.revature.indexnotfound.Project2.controller;

import com.revature.indexnotfound.Project2.entity.User;
import com.revature.indexnotfound.Project2.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService service;

    private final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/register")
    public User saveUsers(@Valid @RequestBody User user){
        LOGGER.info("saved users");
        return service.saveUser(user);
    }

    @GetMapping("/register")
    public List<User> getUsers(){
        LOGGER.info("get ALL users");
        return service.fetchUserList();
    }

    @GetMapping("/register/{id}")
    public User getUserById(@PathVariable("id") long userId){
        LOGGER.info("get user by id");
        return service.fetchUserById(userId);
    }

    @DeleteMapping("/register/{id}")
    public String deleteUserById(@PathVariable("id") long userId){
        LOGGER.info(("deleted user"));
        service.deleteUserById(userId);
        return "user deleted successfully";
    }

    @PutMapping("employees/{id}")
    public User updateUser(@PathVariable("id") long userId, @RequestBody User user){
        return service.updateUser(userId, user);
    }

    @GetMapping("/login/{username}/{password}")
    public User getUserByUsernameAndPassword(@PathVariable String username,
                                             @PathVariable String password){
        LOGGER.info(("logged in"));
        return service.getUserByUsernameAndPassword(username, password);
    }


//    @GetMapping("/employees/name/{firstName}")
//    public User getUserbyName(@PathVariable("firstName") String firstName){
//        return service.fetchUserByName(firstName);
//    }
}
