package com.dxc.assessment.backend.Controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dxc.assessment.backend.Models.Account;

@RestController
public class LoginController {
	
	@PostMapping(path = "/login")
	public boolean login(@RequestBody Account account) {
		return account.Login();
	}
	
}
