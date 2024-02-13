package UI_Menu;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

import Entities.Doctor;

public class PatientUIMenu {
    public static void showPatientMenu() {
        int response = 0;
        do {
            System.out.println("\n\n");
            System.out.println("Welcome, Patient");
            System.out.println("1. Book appointment:");
            System.out.println("2. My appointments:");
            System.out.println("3. Logout");

            Scanner sc = new Scanner(System.in);
            response = Integer.valueOf(sc.nextLine());

            switch (response) {
                case 1:
                    showBookAppointmentMenu();
                    break;
                case 2:
                    showAppointmentsMenu();
                    break;
                case 3:
                    Menu.showMenu();
                    break;
            }
        } while (response !=3 );
    }

    private static void showAppointmentsMenu () {

    }
    private static void showBookAppointmentMenu () {
        int response;
        Scanner sc = new Scanner(System.in);
        do{
            System.out.println("We have the next available dates");
            //got to do a map of the available appointments on each Doctor

            ArrayList<Doctor> availableDoctors = Doctor_UI_Menu.availableDoctors;
            int chosenDoctorId = 0;
            int chosenAvailableTimeId = 0;
            do {
                System.out.println("\n Which doctor has an available time that works for you? write the number");
                for(int i = 0; i < availableDoctors.size(); i++){
                    Doctor doctor = availableDoctors.get(i);
                    ArrayList<Doctor.AvailableTimeAppointment> availableAppointments = doctor.getAvailableAppointments();
                    System.out.println((i+1) + "." + doctor.getName() + ":");

                    for(int j = 0; j < availableAppointments.size(); j++) {
                        Doctor.AvailableTimeAppointment availableTime = availableAppointments.get(j);
                        System.out.println("    " +(j+1) + ". available on: " + availableTime.getDate() + " at " + availableTime.getTime());
                    }
                }
                System.out.println("0. Go back");

                response = Integer.parseInt(sc.nextLine());
                chosenDoctorId = response;

                if(chosenDoctorId != 0) {
                    do {
                        System.out.println("\n And Which available time of that doctor do you want?" +
                                "please write the number");
                        chosenAvailableTimeId = Integer.parseInt(sc.nextLine());
                        response = 0;
                    } while(chosenAvailableTimeId == 0);
                }
            } while (response != 0);
            if(response == 0) continue;

            //we do this bc the index of in the arrayList starts in 0 and the previous list shown to
            //the client started in 1
            chosenDoctorId -= 1;
            chosenAvailableTimeId -= 1;

            Doctor doctorChosen = Doctor_UI_Menu.availableDoctors.get(chosenDoctorId);
            Doctor.AvailableTimeAppointment chosenAvailableTime = doctorChosen.getAvailableAppointments().get(chosenAvailableTimeId);
            Menu.loggedPatient.addAppointment(chosenAvailableTime.getDate(), chosenAvailableTime.getDate(), doctorChosen.getName());

            System.out.println("Great! your appointment with DR" + doctorChosen.getName() + "has already been booked!");

        } while (response != 0);
    }
}
