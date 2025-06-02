const ContatcsRepository = require('../repositories/ContactsRepository');
const isValidUUID = require('../utils/isValidUUID');

class ContactController {

  async index(req, res) {
    const { orderBy } = req.query;
    const contacts = await ContatcsRepository.findAll(orderBy);

    res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid user Id' });
    }

    const contact = await ContatcsRepository.findById(id);

    if(!contact) {
      return res.status(404).json({ error: 'Contact not found ' });
    }

    res.json(contact);
  }

  async store(req, res) {
    const { name, email, phone, category_id } = req.body;

    if(!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return res.status(400).json({ error: 'Invalid category' });
    }
    const contactExists = await ContatcsRepository.findByEmail(email);

    if (contactExists) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContatcsRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    res.status(201).json(contact);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone, category_id } = req.body;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid user Id' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    if(!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContatcsRepository.findById(id);
    if( !contactExists) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    if (email) {
      const contactByEmail = await ContatcsRepository.findByEmail(email);
      if (contactByEmail && contactByEmail.id != id) {
        return res.status(400).json({ error: 'This e-mail is already in use' });
      }
    }

    const contact = await ContatcsRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    res.json(contact);
  }

  async delete(req, res) {
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid user Id' });
    }

    await ContatcsRepository.delete(id);

    res.sendStatus(204);
  }

}

module.exports = new ContactController();
