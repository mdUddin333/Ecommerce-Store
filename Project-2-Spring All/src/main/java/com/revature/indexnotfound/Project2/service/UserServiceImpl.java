package com.revature.indexnotfound.Project2.service;

import com.revature.indexnotfound.Project2.Repository.UserRepository;
import com.revature.indexnotfound.Project2.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Override
    public User saveUser(User user) {
        return repository.save(user);
    }

    @Override
    public List<User> fetchUserList() {
        return repository.findAll();
    }

    @Override
    public User fetchUserById(long userId) {
        Optional<User> user = repository.findById(userId);
        if(!user.isPresent()){
            System.out.println("user id does not exist");
        }
        return user.get();
    }

    @Override
    public void deleteUserById(long userId) {
        repository.deleteById(userId);
    }

    @Override
    public User updateUser(long userId, User user) {
        User userDB = repository.findById(userId).get();

        if(Objects.nonNull(user.getFirstName()) && !"".equalsIgnoreCase(user.getFirstName())){
            userDB.setFirstName(user.getFirstName());
        }

        if(Objects.nonNull(user.getLastName()) && !"".equalsIgnoreCase(user.getLastName())){
            userDB.setLastName(user.getLastName());
        }

        if(Objects.nonNull(user.getAddress()) && !"".equalsIgnoreCase(user.getAddress())){
            userDB.setAddress(user.getAddress());
        }

        return repository.save(userDB);
    }

    @Override
    public void login(User user) {

    }

    @Override
    public User getUserByUsernameAndPassword(String username, String password) {

        return repository.getUserByUsernameAndPassword(username, password);
    }

//    @Override
//    public User fetchUserByName(String firstName) {
//        return repository.findByUserNameIgnoreCase(firstName);
//    }


}
