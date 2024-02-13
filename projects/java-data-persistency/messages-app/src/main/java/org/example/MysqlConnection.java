package org.example;

import java.sql.Connection;
import java.sql.DriverManager;

public class MysqlConnection {
    public Connection get_connection () {
        String JDBCURL = "jdbc:mysql://localhost:3307/mensajes_app";
        String user = "root";
        String password = "mysql08971324";
        Connection connection = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(JDBCURL, user, password);
            if(connection != null) {
                System.out.println("successful connection");
            } else {
                System.out.println("connection to DB was not possible");
            }
        } catch(Exception e) {
            System.out.println(e);
        }
        return connection;
    }
}
