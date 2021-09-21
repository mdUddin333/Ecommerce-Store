package com.revature.indexnotfound.Project2.controller;

import com.revature.indexnotfound.Project2.entity.Order;
import com.revature.indexnotfound.Project2.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    @Autowired
    private OrderService service;

    @PostMapping("/")
    public Order saveOrder(@RequestBody Order order){
        return service.saveOrder(order);

    }
    @GetMapping("/")
    public List<Order> getOrders(){
        return service.getAllOrders();
    }

    @GetMapping("/{orderId}")
    public Order getOrdersByOrderId(@PathVariable("orderId") long orderId){
        return service.getOrderById(orderId);
    }

    @PutMapping("/{orderId}")
    public Order updateOrdersByOrderId(@PathVariable("orderId") long orderId, @RequestBody Order order){
        return service.updateOrder(orderId,order);
    }
    @DeleteMapping ("/{orderId}")
    public Order deleteOrdersByOrderId(@PathVariable("orderId") long orderId){
        return service.deleteOrder(orderId);
    }
}
