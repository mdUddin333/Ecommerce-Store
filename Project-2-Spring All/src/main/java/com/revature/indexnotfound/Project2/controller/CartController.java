package com.revature.indexnotfound.Project2.controller;

import com.revature.indexnotfound.Project2.entity.Cart;
import com.revature.indexnotfound.Project2.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/carts")
public class CartController {

    @Autowired
    CartService service;


    @PostMapping("/")
    public Cart saveCart(@RequestBody Cart cart){

        return service.addCart(cart);
    }

    @GetMapping("/")
    public List<Cart> getAllCarts(){
        return service.getAllCarts();
    }

    @DeleteMapping("/{id}")
    public void deleteCartById(@PathVariable("id") long cartId){

        service.deleteCart(cartId);
        System.out.println("Delete Cart by id "+cartId);

    }
    @DeleteMapping("/")
    public void deleteAllCarts(){


        service.deleteAllCart();
        System.out.println("Remove all the cart");

    }




}
