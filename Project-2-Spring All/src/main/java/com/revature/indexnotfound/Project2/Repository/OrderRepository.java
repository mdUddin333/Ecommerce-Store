package com.revature.indexnotfound.Project2.Repository;

import com.revature.indexnotfound.Project2.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
