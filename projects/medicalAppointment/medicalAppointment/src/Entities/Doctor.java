package Entities;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

public class Doctor extends User {
    private ArrayList<Appointment> appointments = new ArrayList<>();
    private ArrayList<AvailableTimeAppointment> availableTimes = new ArrayList<>();
    public void log (String msg) {
        System.out.println(msg);
    }
    public void log (Double msg) {
        System.out.println(msg);
    }
    public void log (int msg) {
        System.out.println(msg);
    }
    public void log (Doctor msg) {
        System.out.println(msg);
    }
    public void log (boolean msg) {
        System.out.println(msg);
    }

    String name;
    String email;
    boolean isAlive;
    public Doctor(String name, String email) {
        super(name, email);
    }

    public Doctor(String name, String email, boolean isAlive) {
        super(name, email);
        this.isAlive = isAlive;
    }

    //behaviors
    public void showName() {
        log(this.name);
    }
    public void showLivingStatus(){
        log(this.isAlive);
    }

    public void addAppointment(String date, String time, String name, Long contactNumber) {
        appointments.add(new Appointment(date, time, name, contactNumber));
    }
    public void addAvailableTime (String date, String time) {
        availableTimes.add(new AvailableTimeAppointment(date, time));
    }

    public ArrayList<Appointment> getAppointments() {
        return appointments;
    }
    public ArrayList<AvailableTimeAppointment> getAvailableAppointments() {
        return availableTimes;
    }

    public static class AvailableTimeAppointment {
        private String time;
        private int id = 1;
        private String date;
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        AvailableTimeAppointment (String date, String time) {
            try{
                this.id = id;
                this.date = String.valueOf(format.parse(date));
                this.time = time;
            } catch (ParseException e){
                System.out.println(e);
            }
        }
        public String getDate () {
            return (this.date);
        }
        public String getTime () {
            return (this.time);
        }
    }
    @Override
    public void getUserData() {
        System.out.println("Getting Entities.Doctor data...");
    }
}