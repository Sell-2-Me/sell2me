package org.sell2me.application.controller;

import org.sell2me.application.model.User;
import org.sell2me.application.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    UserService userService;

    @RequestMapping(value = "/{userId}", method = RequestMethod.GET, produces = "application/json")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public User getUser(@PathVariable Long userId) {
        User user = userService.getUser(userId);
        log.info("GET ~/user/" + userId + " --- " + user.toString());
        return user;
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = "application/json")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = "application/json")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @RequestMapping(value = "/{userId}", method = RequestMethod.DELETE, produces = "application/json")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    public User deleteUser(@PathVariable Long userId) {
        return userService.deleteUser(userId);
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    public List<User> getAllUsers() {
        return userService.getUsers();
    }

    @RequestMapping(value = "/findByName/{name}", method = RequestMethod.GET, produces = "application/json")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
    public User getUser(@PathVariable String name) {
        return userService.findByName(name);
    }

}
