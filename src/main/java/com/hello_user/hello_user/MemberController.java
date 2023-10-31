package com.hello_user.hello_user;

import java.util.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class MemberController {

    // Listan som våra medlemmar kommer sparas i. Lägger till en admin-medlemm
    // direkt när listan skapas.
    private static final List<Member> members = new ArrayList<>(Arrays.asList(new Member("admin", "admin")));

    @GetMapping("/")
    String getIndex() {
        return "index";
    }

    @GetMapping("/member")
    String getMember(Model model) {
        model.addAttribute("members", members);
        return "member";
    }

    @GetMapping("/login")
    String getLogin(Model model) {
        model.addAttribute("adminUsername", members.get(0).getUsername());
        model.addAttribute("adminPassword", members.get(0).getPassword());
        return "login";
    }

    @GetMapping("/join")
    String getJoin(Model model) {
        model.addAttribute("adminUsername", members.get(0).getUsername());
        model.addAttribute("newMember", new Member());
        return "join";
    }

    @GetMapping("/remove-member/{memberUsername}")
    String removeMember(@PathVariable String memberUsername) {
        members.removeIf(member -> member.getUsername().equals(memberUsername));
        return "redirect:/member";
    }

    @PostMapping("/new-member")
    String newMember(@RequestParam("username") String username, @RequestParam("password") String password) {
        members.add(new Member(username, password));
        return "redirect:/member";
    }
}
