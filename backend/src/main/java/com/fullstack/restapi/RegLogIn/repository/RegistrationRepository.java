package com.fullstack.restapi.RegLogIn.repository;

import com.fullstack.restapi.RegLogIn.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<User, Integer>
{
    public User findByEmailId(String emailId);
    public User findByEmailIdAndPassword(String emailId,String password);

}
