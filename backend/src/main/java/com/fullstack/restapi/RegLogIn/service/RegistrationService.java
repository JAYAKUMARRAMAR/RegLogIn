package com.fullstack.restapi.RegLogIn.service;

import com.fullstack.restapi.RegLogIn.model.User;
import com.fullstack.restapi.RegLogIn.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {
    @
            Autowired
    private RegistrationRepository repo;

    public User saveUser(User user)
    {
        return repo.save(user);
    }

    public List<User> getUser(User user)
    {
        return repo.findAll();
    }
    public User fetchUserByEmailId(String email)
    {
        return repo.findByEmailId(email);
    }
    public User fetchUserByEmailIdAndPassword(String email,String password)
    {
        return repo.findByEmailIdAndPassword(email,password);
    }
}
