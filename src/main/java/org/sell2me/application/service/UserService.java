package org.sell2me.application.service;

import org.sell2me.application.model.User;

import java.util.List;

public interface UserService {

    User getUserByUsername(String username);

    User getUser(Long id);

    User saveUser(User user);

    User updateUser(User user);

    User deleteUser(Long id);

    List<User> getUsers();

    User findByName(String name);

}
