from django.db import models

# ✅ Home Page Section
class Home(models.Model):  # 🔁 fixed typo: model → Model
    message = models.TextField()
    img = models.ImageField(upload_to="home/", blank=True)
    headline = models.CharField(max_length=255, blank=True)
    subline = models.CharField(max_length=255, blank=True)
    cta_primary = models.CharField(max_length=100, blank=True)
    cta_secondary = models.CharField(max_length=100, blank=True)
    mission = models.TextField(blank=True)
    core_value_1 = models.CharField(max_length=100, blank=True)
    core_value_2 = models.CharField(max_length=100, blank=True)
    impact_stat = models.CharField(max_length=100, blank=True)
    testimonial = models.TextField(blank=True)
    newsletter_prompt = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.message[:20]


# ✅ News/Blog Section
class Posts(models.Model):  # 🔁 fixed typo: model → Model
    title = models.CharField(max_length=200)
    detail = models.TextField()
    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


# ✅ Projects Section
class Projects(models.Model):
    STATUS_CHOICES = [
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
        ('paused', 'Paused'),
    ]
    title = models.CharField(max_length=200)
    detail = models.TextField()
    img = models.ImageField(upload_to="projects/", blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)

    def __str__(self):
        return self.title


# ✅ Donations Section
class Donations(models.Model):  # 🔁 fixed typo
    donator = models.CharField(max_length=64)
    contactinfo = models.CharField(max_length=128)  # phone or email or both
    amount = models.DecimalField(max_digits=10, decimal_places=2)  # 💸 use Decimal for money
    message = models.TextField(blank=True)

    def __str__(self):
        return self.donator


# ✅ Volunteer Form
class Volunteer(models.Model):  # 🔁 fixed typo
    name = models.CharField(max_length=64)
    contactinfo = models.CharField(max_length=128)  # phone or email or both
    areaofinterest = models.TextField()

    def __str__(self):
        return self.name


# ✅ Contact Info Display
class OurContact(models.Model):
    contactinfo = models.CharField(max_length=128)  # email and phone
    address = models.CharField(max_length=128)

    def __str__(self):
        return self.contactinfo
