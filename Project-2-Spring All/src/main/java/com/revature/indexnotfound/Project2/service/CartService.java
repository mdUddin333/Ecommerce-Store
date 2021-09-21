package com.revature.indexnotfound.Project2.service;

import com.revature.indexnotfound.Project2.entity.Cart;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartService {

    Cart addCart(Cart cart);

    List<Cart> getAllCarts();

    Cart getCartById(long cartId);

    void deleteCart(long cartId);

    void deleteAllCart();



}
