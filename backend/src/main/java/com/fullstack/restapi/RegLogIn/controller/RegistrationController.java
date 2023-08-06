package com.fullstack.restapi.RegLogIn.controller;

import com.fullstack.restapi.RegLogIn.model.User;
import com.fullstack.restapi.RegLogIn.repository.RegistrationRepository;
import com.fullstack.restapi.RegLogIn.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    private User user;
    private RegistrationRepository repository;
    @PostMapping("/registeruser")
    public User registerUser(@RequestBody User user) throws Exception
    {
        String tempEmailId=user.getEmailId();
        if(tempEmailId!=null && !"".equals(tempEmailId))
        {
            User userobj=service.fetchUserByEmailId(tempEmailId);
            if(userobj!=null)
            {
                throw new Exception("user with "+tempEmailId+" is already exist");
            }
        }
        User userobj=null;
        userobj=service.saveUser(user);
        return userobj;
    }

    @GetMapping("/user")
    public List<User> registerUser()
    {
        return service.getUser(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) throws Exception
    {
        String tempEid=user.getEmailId();
        String tempPass=user.getPassword();
        User userobj=null;
        if(tempEid!=null && tempPass!=null)
        {
            userobj=service.fetchUserByEmailIdAndPassword(tempEid,tempPass);
        }
        if(userobj==null)
        {
            throw new Exception("Bad Credentials");
        }
        return userobj;
    }
}
