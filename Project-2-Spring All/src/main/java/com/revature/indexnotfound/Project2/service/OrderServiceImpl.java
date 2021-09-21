package com.revature.indexnotfound.Project2.service;

import com.revature.indexnotfound.Project2.Repository.OrderRepository;
import com.revature.indexnotfound.Project2.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository repository;

    @Override
    public Order saveOrder(Order order) {
        return repository.save(order);

    }

    @Override
    public List<Order> getAllOrders() {
        return repository.findAll();
    }

    @Override
    public Order getOrderById(long orderId) {
        Optional<Order> order=repository.findById(orderId);
        if (!order.isPresent()){
            System.out.println("Please provide the correct order Id!!!");
        }
        return order.get();
    }

    @Override
    public Order updateOrder(long orderId, Order order) {

        Order orderDb=repository.findById(orderId).get();

        orderDb.setUserId(order.getUserId());
        orderDb.setProductName(order.getProductName());
        orderDb.setQuantity(order.getQuantity());
        orderDb.setPrice(order.getPrice());

        return repository.save(orderDb);
    }

    @Override
    public Order deleteOrder(long orderId) {
        Order orderDb=repository.findById(orderId).get();
        repository.delete(orderDb);
        return orderDb;
    }
}
