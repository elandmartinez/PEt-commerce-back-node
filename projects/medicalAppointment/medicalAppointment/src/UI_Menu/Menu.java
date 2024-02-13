package UI_Menu;

import Entities.Patient;
import Entities.Doctor;

import java.util.ArrayList;
import java.util.Scanner;

public class Menu {

    public static ArrayList<Doctor> doctors = new ArrayList<>();
    public static ArrayList<Patient> patients = new ArrayList<>();

    public static final String[] MONTHS = {"Enero", "Febrero", "Marzo", "Abril", "Mayo" , "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"};
    public static Patient loggedPatient;
    public static Doctor loggedDoctor;
    public static void showMenu () {
        System.out.println("Welcome to my appointments");
        System.out.println("What do you want to check?");

        int response = 0;
        do {
            System.out.println("1. model.doctor");
            System.out.println("2. model.patient");
            System.out.println("0. Exit");

            Scanner sc = new Scanner(System.in);
            response = Integer.valueOf(sc.nextLine());
            switch (response) {
                case 1:
                    System.out.println("Doctor");
                    authUser(1);
                    break;
                case 2:
                    System.out.println("Patient");
                    authUser(2);
                    break;
                case 0:
                    System.out.println("Thank you for your visit");
                    break;
                default:
                    System.out.println("please choose a valid answer");
                    break;
            }
        } while (response != 0);
    }
    private static void authUser (int userType) {
        //user type 1: doctor
        //user type 2: patient

        boolean isEmailCorrect = false;

        Menu.doctors.add(new Doctor("Andres", "andres@gmail.com"));
        Menu.doctors.add(new Doctor("Federico", "fico@gmail.com"));
        Menu.doctors.add(new Doctor("Paola", "paola@gmail.com"));

        Menu.patients.add(new Patient("Elias", "andres@gmail.com"));
        Menu.patients.add(new Patient("Carolina", "fico@gmail.com"));
        Menu.patients.add(new Patient("Alberto", "paola@gmail.com"));

        do {
            System.out.println("Please insert your email.");

            Scanner sc = new Scanner(System.in);
            String email = sc.nextLine();

            if(userType == 1) {
                for(Doctor d: doctors) {
                    if(d.getEmail().equals(email)){
                        isEmailCorrect = true;
                        loggedDoctor = d;
                        Doctor_UI_Menu.showDoctorMenu();
                    }
                }
            } else if (userType == 2){
                for(Patient p: patients) {
                    if(p.getEmail().equals(email)){
                        isEmailCorrect = true;
                        loggedPatient = p;
                        PatientUIMenu.showPatientMenu();
                        //show patient menu
                    }
                }
            }
        } while (!isEmailCorrect);
    }
}
