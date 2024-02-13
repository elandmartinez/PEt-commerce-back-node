package Entities;

public abstract class User {
    String name;
    String email;
    int phoneNumber;
    String address;

    public User (
            String name,
            String email
    ) {
        this.name = name;
        this.email = email;
    }
    public User (
            String name,
            String email,
            int phoneNumber,
            String address
    ) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public int getPhoneNumber() {
        return this.phoneNumber;
    }

    public String getAddress() {
        return this.address;
    }

    public abstract void getUserData();

}
