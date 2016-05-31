package org.sell2me.application.service;

import org.sell2me.application.model.SpringSecurityUser;
import org.sell2me.application.model.User;
import org.sell2me.application.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service(value = "userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.userService.getUserByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException(String.format("User with username '%s' doesn't exist.", username));
        } else {
            return new SpringSecurityUser(
                    user.getUserID(),
                    user.getUsername(),
                    user.getPassword(),
                    null,
                    null,
                    AuthorityUtils.commaSeparatedStringToAuthorityList(user.getAuthorities()));
        }
    }
}
