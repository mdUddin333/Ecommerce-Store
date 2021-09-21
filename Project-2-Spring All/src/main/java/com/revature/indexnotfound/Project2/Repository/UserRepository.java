package com.revature.indexnotfound.Project2.Repository;

import com.revature.indexnotfound.Project2.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(
            value = "select * from User where username = ?1 " +
            "and password = ?2",
            nativeQuery = true)
    public User getUserByUsernameAndPassword(String username,
                                             String password);

}
