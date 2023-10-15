package com.tfgunir.happypaws.modelo.entities;


import java.io.Serializable;
import javax.persistence.*;


import java.util.Date;


/**
 * The persistent class for the usuarios database table.
 * 
 */
@Entity
@Table(name="usuarios")
@NamedQuery(name="Usuario.findAll", query="SELECT u FROM Usuario u")
public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idusuario;

	private String apellidos;

	private byte enabled;

	private String direccion;

	private String dni;

	private String email;

	@Column(name="EMAIL_NORMALIZADO")
	private String emailNormalizado;

	@Temporal(TemporalType.DATE)
	@Column(name="FECHA_ALTA")
	private Date fechaAlta;

	@Temporal(TemporalType.DATE)
	@Column(name="FECHA_enabled")
	private Date fechaenabled;

	private String nombre;

	private String password;

	private int telefono;

	//uni-directional many-to-one association to Municipio
	@ManyToOne
	@JoinColumn(name="IDMUNICIPIO")
	private Municipio municipio;

	//uni-directional many-to-one association to Rol
	@ManyToOne
	@JoinColumn(name="IDROL")
	private Rol rol;

	public Usuario() {
	}

	public int getIdusuario() {
		return this.idusuario;
	}

	public void setIdusuario(int idusuario) {
		this.idusuario = idusuario;
	}

	public String getApellidos() {
		return this.apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public byte getenabled() {
		return this.enabled;
	}

	public void setenabled(byte enabled) {
		this.enabled = enabled;
	}

	public String getDireccion() {
		return this.direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getDni() {
		return this.dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEmailNormalizado() {
		return this.emailNormalizado;
	}

	public void setEmailNormalizado(String emailNormalizado) {
		this.emailNormalizado = emailNormalizado;
	}

	public Date getFechaAlta() {
		return this.fechaAlta;
	}

	public void setFechaAlta(Date fechaAlta) {
		this.fechaAlta = fechaAlta;
	}

	public Date getFechaenabled() {
		return this.fechaenabled;
	}

	public void setFechaenabled(Date fechaenabled) {
		this.fechaenabled = fechaenabled;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getTelefono() {
		return this.telefono;
	}

	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}

	public Municipio getMunicipio() {
		return this.municipio;
	}

	public void setMunicipio(Municipio municipio) {
		this.municipio = municipio;
	}

	public Rol getRol() {
		return this.rol;
	}

	public void setRol(Rol rol) {
		this.rol = rol;
	}

}