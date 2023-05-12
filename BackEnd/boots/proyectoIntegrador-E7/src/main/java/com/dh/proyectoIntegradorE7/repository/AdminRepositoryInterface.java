package com.dh.proyectoIntegradorE7.repository;

import com.dh.proyectoIntegradorE7.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepositoryInterface extends JpaRepository<Admin,Long> {
}
