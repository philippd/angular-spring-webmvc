package test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import test.domain.Person;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person, Long> {

}
