package Entities;

public class Appointment implements IsSchedulable {
    String date;
    String time;
    String name;
    Long contactNumber;
    Appointment (String date, String time, String name, Long contactNumber) {
        this.date = date;
        this.time = time;
        this.name = name;
        this.contactNumber = contactNumber;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setContactNumber(Long contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getDate() {
        return this.date;
    }

    public String getTime() {
        return this.time;
    }

    public String getName() {
        return this.name;
    }

    public Long getContactNumber() {
        return this.contactNumber;
    }

    @Override
    public void schedule(String date, String time)  {

    }
}
