namespace BookService.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using BookService.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<BookService.Models.BookServiceContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(BookService.Models.BookServiceContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.Authors.AddOrUpdate(x => x.Id,
                new Author() { Id = 1, Name = "Stefan Zweig" },
                new Author() { Id = 2, Name = "Stephan King" },
                new Author() { Id = 3, Name = "John Steinbeck" },
                new Author() { Id = 4, Name = "J. K. Rowling" });

            context.Books.AddOrUpdate(x => x.Id,
                new Book() { Id = 1, Title = "Chess Story", Year = 2005, AuthorId = 1, Price = 10.80M, Genre = "Fiction" },
                new Book() { Id = 2, Title = "From a Buick 8", Year = 2017, AuthorId = 2, Price = 12.54M, Genre = "Horror Fiction" },
                new Book() { Id = 3, Title = "The Pearl", Year = 1993, AuthorId = 3, Price = 7.96M, Genre = "Fiction" },
                new Book() { Id = 4, Title = "Harry Potter and the Philosopher's Stone", Year = 1997, AuthorId = 4, Price = 8.07M, Genre = "Fantasy Fiction" },
                new Book() { Id = 5, Title = "Harry Potter and the Chamber of Secrets", Year = 2002, AuthorId = 4, Price = 26.54M, Genre = "Fantasy Fiction" });

        }
    }
}
