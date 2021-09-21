package com.revature.indexnotfound.Project2.service;

import com.revature.indexnotfound.Project2.entity.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {

    Order saveOrder(Order order);

    List<Order> getAllOrders();

    Order getOrderById(long orderId);

    Order updateOrder(long orderId,Order order);

    Order deleteOrder(long orderId);
}
