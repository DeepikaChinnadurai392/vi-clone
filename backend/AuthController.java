@PostMapping("/login")
public ResponseEntity<String> login(
        @RequestParam(required = false) String option,
        @RequestBody(required = false) Map<String, String> request) {

    if ("company".equals(option)) {
        String email = request.get("email");
        // TODO: Add real company email validation here
        return ResponseEntity.ok("Company login successful for: " + email);
    }

    // Default login with username/password
    String username = request.get("username");
    String password = request.get("password");

    if ("admin".equals(username) && "admin".equals(password)) {
        return ResponseEntity.ok("Login successful!");
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed!");
    }
}
