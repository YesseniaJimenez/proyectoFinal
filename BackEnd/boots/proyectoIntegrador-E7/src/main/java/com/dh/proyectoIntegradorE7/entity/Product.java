package com.dh.proyectoIntegradorE7.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name="productos")
public class Product {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String type;
    private Integer price;
    @ManyToOne()
   @JoinColumn(table = "administrador_id", nullable = false)
    private Admin admin;

    public Product() {
    }

    public Product(String name, String type, Integer price, Admin admin) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.admin = admin;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }
}
