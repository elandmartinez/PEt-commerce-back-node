package Entities;

import java.util.ArrayList;

public class Patient extends User{
    private ArrayList<Appointment> appointments = new ArrayList<>();
    String name;
    String email;
    int phoneNumber;
    String address;
    String birthday;
    String blood;
    double weight;
    double height;
    public Patient (String name, String email) {
        super(name, email);
    }

    public Patient (
             String name,
             String email,
             String address,
             int phoneNumber,
             String birthday,
             double weight,
             double height,
             String blood
    ) {
        super(name, email, phoneNumber, address);
        this.birthday = birthday;
        this.blood = blood;
        this.weight = weight;
        this.height = height;
    }

    public void addAppointment(String date, String time, String nameOfDoc) {
        appointments.add(new Appointment(date, time, nameOfDoc));
    }

    public ArrayList<Appointment> getAppointments (){
        return appointments;
    }
    public static class Appointment {
        String date;
        String time;
        String nameOfDoc;
        Appointment(String date, String time, String nameOfDoc) {
            this.date = date;
            this.time = time;
            this.nameOfDoc = nameOfDoc;
        }

        public String getDate() {
            return date;
        }

        public void setDate(String date) {
            this.date = date;
        }

        public String getTime() {
            return time;
        }

        public void setTime(String time) {
            this.time = time;
        }

        public String getNameOfDoc() {
            return nameOfDoc;
        }

        public void setNameOfDoc(String nameOfDoc) {
            this.nameOfDoc = nameOfDoc;
        }
    }
    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public void setBlood(String blood) {
        this.blood = blood;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public String getBirthday() {
        return birthday;
    }

    public String getBlood() {
        return blood;
    }

    public double getWeight() {
        return weight;
    }

    public double getHeight() {
        return height;
    }

    @Override
    public String toString() {
        System.out.println("hey, this is the toString method");
        return null;
    }
    @Override
    public void getUserData() {
        System.out.println("Getting patient data...");
    }
}
