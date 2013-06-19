package test.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import test.domain.Person;
import test.repository.PersonRepository;

import java.util.List;
import java.util.Random;

@Controller
@RequestMapping("/person")
public class PersonController {

  @Autowired
  private PersonRepository repository;

  private Logger logger = LoggerFactory.getLogger(PersonController.class);

  @RequestMapping(method = RequestMethod.GET)
  @ResponseBody
  public List<Person> getPersons() {

    Person person = new Person();
    person.setFirstName("Hanueli" + repository.count());
    person.setMiddleName("der 2.");
    person.setLastName("Guggebach");
    person.setAge(11);
    repository.save(person);
    logger.debug("Returning {} persons.", repository.count());
    return repository.findAll(new Sort(Sort.Direction.ASC, "id"));
  }

  @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public void deletePerson(@PathVariable long id) {
    logger.debug("deleting person with id {}", id);
    repository.delete(id);
  }
}
