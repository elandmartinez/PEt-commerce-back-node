package UI_Menu;

import java.util.ArrayList;
import java.util.Scanner;
import Entities.Doctor;

public class Doctor_UI_Menu {
    public static ArrayList<Doctor> availableDoctors = new ArrayList<>();
    public static void showDoctorMenu() {
        int response = 0;
        Scanner sc = new Scanner(System.in);
        do {
            System.out.println("\n\n");
            System.out.println("Doctor");
            System.out.println("Welcome, Doctor " + Menu.loggedDoctor.getName());
            System.out.println("1. Add available appointment");
            System.out.println("2. Check Scheduled appointments");
            System.out.println("0. Log out");

            response = Integer.valueOf(sc.nextLine());

            System.out.println("\n (response is: " + response + ") \n ");

            switch (response) {
                case 1:
                    //here we display the menu for adding an available time for appointment
                    showAddAvailableAppointmentsMenu();
                    break;
                case 2:
                    //here we display the menu for checking already schedule appointments
                    break;
                case 0:
                    System.out.println("Login out...");
                    break;
                default:
                    System.out.println("please choose a valid answer");
                    break;
            }
        } while (response != 0);
    }
    private static void showAddAvailableAppointmentsMenu (){
        int monthSelectedIndex = 0;
        int response = 0;
        do {
            System.out.println(":: Add available appointment");
            System.out.println(":: Select a month");

            for(int i = 0; i < 3; i++) {
                int j = i + 1;
                System.out.println(j + ". " + Menu.MONTHS[i]);
            }
            System.out.println("4. Exit");

            Scanner sc = new Scanner(System.in);
            response = Integer.valueOf(sc.nextLine());
            monthSelectedIndex = response -1;

            if(monthSelectedIndex >= 0 && monthSelectedIndex < 3) {
                //0,1,2,3
                System.out.println(monthSelectedIndex + 1 + ". " + Menu.MONTHS[monthSelectedIndex]);
                System.out.println("Insert the available day: [yy/mm/dd]");

                String date = sc.nextLine();

                System.out.println("The date is " + date + ", correct? \n1.Yes \n2.Change Date");
                int isDateCorrectResponse = Integer.valueOf(sc.nextLine());

                if(isDateCorrectResponse == 2) continue;

                int isDateTimeResponse = 0;
                String dateTime= "";
                do {
                    System.out.println("Insert the time for the date: " + date + ", Ex: 16:00");
                    dateTime = sc.nextLine();
                    System.out.println("The time is " + dateTime + ", correct? \n1.Yes \n2.Change Time");
                    isDateTimeResponse = Integer.valueOf(sc.nextLine());
                    if(isDateCorrectResponse == 2) continue;
                } while (isDateTimeResponse != 1);
                Menu.loggedDoctor.addAvailableTime(date, dateTime);
                checkDoctorAvailableAppointments(Menu.loggedDoctor);

            }
        } while (response != 4);
    }
    private static void checkDoctorAvailableAppointments (Doctor doctor) {
        ArrayList<Doctor.AvailableTimeAppointment> availableTimes = doctor.getAvailableAppointments();
        if (!availableTimes.isEmpty() && !availableDoctors.contains(doctor)) {
            availableDoctors.add(doctor);
        }
    }
}
