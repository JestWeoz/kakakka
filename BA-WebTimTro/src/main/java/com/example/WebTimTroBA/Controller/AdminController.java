package com.example.WebTimTroBA.Controller;

import com.example.WebTimTroBA.Service.MotelService;
import com.example.WebTimTroBA.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {
    private final MotelService motelService;
    private final UserService userService;

    @GetMapping("/pagination/review")
    public ResponseEntity<Object> findAllReviews(@RequestParam (name = "page", defaultValue = "1") Integer page) throws MalformedURLException {
        return ResponseEntity.ok().body(motelService.findAndPagination(page));
    }

    @PostMapping("/markMotel/{id}")
    public ResponseEntity<String> markMotel(@PathVariable Integer id){
        motelService.markById(id);
        return ResponseEntity.status(HttpStatus.CREATED).body("Thêm thành công!");
    }

    @GetMapping("/list-user")
    public ResponseEntity<Object> findAllUsers(@RequestParam(name = "page", defaultValue = "1") Integer page) throws Exception {
        return ResponseEntity.ok().body(userService.getAllUsers(page));
    }

    @PostMapping("/admin-review")
    public ResponseEntity<Object> review(List<Integer> ids,
                                         @RequestHeader("Authorization") String authorization,
                                         Integer status){
        motelService.review(ids, status);
        return ResponseEntity.ok().body("Success");
    }
}
