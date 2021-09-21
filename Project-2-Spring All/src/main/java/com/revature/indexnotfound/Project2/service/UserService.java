package com.revature.indexnotfound.Project2.service;

import com.revature.indexnotfound.Project2.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    public User saveUser(User user);
    public List<User> fetchUserList();
    public User fetchUserById(long userId);
    public void deleteUserById(long userId);
    public User updateUser(long userId, User user);
//    public User fetchUserByName(String userName);
    public void login(User user);
    public User getUserByUsernameAndPassword(String username, String password);

}
