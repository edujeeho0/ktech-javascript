package com.example.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("views")
public class ViewController {
    @GetMapping("test")
    public String test() {
        return "test";
    }

    // 1. 로그인 페이지로 이동을 하고,
    // 로그인 페이지에서 아이디 비밀번호를 전달한 다음 JWT를 발급받는다.
    @GetMapping("login")
    public String login() {
        return "login-form";
    }

    // 2. GET /articles 에다가 요청을 보낼 때 JWT를 포함해서 보낸다.
    // 인증이 된 사용자로 인식할 수 있도록 한다.


    // 3. POST /articles 에다가 요청을 보낼 때 JWT를 포함해서 보낸다.
    // 인증이 된 사용자로 인식할 수 있도록 한다.
}
