package com.revature.indexnotfound.Project2.Repository;

import com.revature.indexnotfound.Project2.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
}