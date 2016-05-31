package org.sell2me.application.repository;

import org.sell2me.application.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    User findByFirstname(String name);

}
