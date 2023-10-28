package com.hello_user.hello_user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MemberController {

    private static final List<Member> members = new ArrayList<>();
    static {
        members.add(new Member("admin", "admin"));
        members.add(new Member("Dolan", "admin"));
        members.add(new Member("Löfven", "admin"));
        members.add(new Member("Sjöstedt", "admin"));
    }

    @GetMapping("/")
    String getIndex(Model model) {
        model.addAttribute("members", members);
        return "index";
    }

    @GetMapping("/join")
    String getJoin(Model model) {
        model.addAttribute("members", members);
        return "join";
    }

    @GetMapping("/member")
    String getMember(Model model) {
        model.addAttribute("members", members);
        return "member";
    }

    @GetMapping("/login")
    String getLogin(Model model) {
        model.addAttribute("members", members);
        return "login";
    }
}
