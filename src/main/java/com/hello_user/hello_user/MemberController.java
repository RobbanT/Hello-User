package com.hello_user.hello_user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MemberController {
    @GetMapping("/")
    String getIndex() {
        return "index";
    }

    @GetMapping("/join")
    String getJoin() {
        return "join";
    }

    @GetMapping("/member")
    String getMember() {
        return "member";
    }

    @GetMapping("/login")
    String getLogin() {
        return "login";
    }
}
