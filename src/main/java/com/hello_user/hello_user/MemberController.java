package com.hello_user.hello_user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MemberController {

    private static final List<Member> members = new ArrayList<>();
    static {
        members.add(new Member("admin", "admin"));
    }

    @GetMapping("/")
    String getIndex(Model model) {
        model.addAttribute("members", members);
        return "index";
    }

    @GetMapping("/join")
    String getJoin(Model model) {
        model.addAttribute("members", members);
        model.addAttribute("newMember", new Member("", ""));
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

    @PostMapping("/new-member")
    String newMember(@RequestParam("username") String username) {
        members.add(new Member(username, "dada"));
        return "redirect:/member";
    }

}
