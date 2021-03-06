package com.youmarket.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Supermercado {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="nombre", length=50)
	private String nombre;
	
	@Column(name="descripcion", length = 250)
	private String descripcion;
	
	@Column(name="c_postal", length = 5)
	private String cPostal;
	
	@Column(name="intolerancia", length = 250)
	private String intolerancia;

	
}
